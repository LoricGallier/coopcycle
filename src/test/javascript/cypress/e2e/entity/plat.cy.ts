import {
  entityTableSelector,
  entityDetailsButtonSelector,
  entityDetailsBackButtonSelector,
  entityCreateButtonSelector,
  entityCreateSaveButtonSelector,
  entityCreateCancelButtonSelector,
  entityEditButtonSelector,
  entityDeleteButtonSelector,
  entityConfirmDeleteButtonSelector,
} from '../../support/entity';

describe('Plat e2e test', () => {
  const platPageUrl = '/plat';
  const platPageUrlPattern = new RegExp('/plat(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const platSample = { name: 'Lorraine', price: 71567, quantity: 53908 };

  let plat;

  beforeEach(() => {
    cy.login(username, password);
  });

  beforeEach(() => {
    cy.intercept('GET', '/api/plats+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/api/plats').as('postEntityRequest');
    cy.intercept('DELETE', '/api/plats/*').as('deleteEntityRequest');
  });

  afterEach(() => {
    if (plat) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/api/plats/${plat.id}`,
      }).then(() => {
        plat = undefined;
      });
    }
  });

  it('Plats menu should load Plats page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('plat');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('Plat').should('exist');
    cy.url().should('match', platPageUrlPattern);
  });

  describe('Plat page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(platPageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create Plat page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/plat/new$'));
        cy.getEntityCreateUpdateHeading('Plat');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', platPageUrlPattern);
      });
    });

    describe('with existing value', () => {
      beforeEach(() => {
        cy.authenticatedRequest({
          method: 'POST',
          url: '/api/plats',
          body: platSample,
        }).then(({ body }) => {
          plat = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/api/plats+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              body: [plat],
            }
          ).as('entitiesRequestInternal');
        });

        cy.visit(platPageUrl);

        cy.wait('@entitiesRequestInternal');
      });

      it('detail button click should load details Plat page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('plat');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', platPageUrlPattern);
      });

      it('edit button click should load edit Plat page and go back', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Plat');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', platPageUrlPattern);
      });

      it('edit button click should load edit Plat page and save', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Plat');
        cy.get(entityCreateSaveButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', platPageUrlPattern);
      });

      it('last delete button click should delete instance of Plat', () => {
        cy.get(entityDeleteButtonSelector).last().click();
        cy.getEntityDeleteDialogHeading('plat').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', platPageUrlPattern);

        plat = undefined;
      });
    });
  });

  describe('new Plat page', () => {
    beforeEach(() => {
      cy.visit(`${platPageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('Plat');
    });

    it('should create an instance of Plat', () => {
      cy.get(`[data-cy="name"]`).type('productize Movies plum').should('have.value', 'productize Movies plum');

      cy.get(`[data-cy="price"]`).type('74507').should('have.value', '74507');

      cy.get(`[data-cy="quantity"]`).type('56233').should('have.value', '56233');

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(201);
        plat = response.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(200);
      });
      cy.url().should('match', platPageUrlPattern);
    });
  });
});
