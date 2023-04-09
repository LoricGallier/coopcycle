import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'findLanguageFromKey' })
export class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: { [key: string]: { name: string; rtl?: boolean } } = {
    al: { name: 'Shqip' },
    hy: { name: 'Հայերեն' },
    bn: { name: 'বাংলা' },
    bg: { name: 'Български' },
    hr: { name: 'Hrvatski' },
    fr: { name: 'Français' },
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };

  transform(lang: string): string {
    return this.languages[lang].name;
  }
}
