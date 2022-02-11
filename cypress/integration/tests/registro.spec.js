import { rutaRegistro } from '../../constants/routes';
import { selectoresRegistro } from '../../constants/selectors';
import { textosRegistro } from '../../constants/texts';

describe('Regristro', () => {
  beforeEach(() => {
    cy.visit(rutaRegistro);
  });

  it('[TC0025] deberia contener todos los campos de regristro', () => {
    // Bucle para chequear todos los campos
    Object.entries(textosRegistro.camposFormulario).forEach(([key, value]) => {
      cy.get(`label[for="${key}"]`).contains(value);
    });
  });

  it('[TC0026] deberia mostrar mensaje cuando los campos obligatorios estan vacios', () => {
    // cargamos usuarios
    cy.fixture('users').then((data) => {
      const usuario = data.usuarios.usuarioCorrecto;
      // Usamos selectores para pagina de registro
      cy.get(selectoresRegistro.camposFormulario.nombre).type(usuario.nombre);
      cy.get(selectoresRegistro.camposFormulario.apellidos).type(
        usuario.apellidos
      );
      cy.get(selectoresRegistro.camposFormulario.telefono).type(
        usuario.telefono
      );
      cy.get(selectoresRegistro.camposFormulario.nif).type(usuario.nif);
      cy.get(selectoresRegistro.camposFormulario.direccion).type(
        usuario.direccion
      );
      cy.get(selectoresRegistro.camposFormulario.poblacion).type(
        usuario.direccion
      );
      cy.get(selectoresRegistro.camposFormulario.email).type(usuario.email);
      cy.get(selectoresRegistro.camposFormulario.clave).type(usuario.clave);
      cy.get(selectoresRegistro.camposFormulario.cp).type(usuario.cp);
      cy.get(selectoresRegistro.camposFormulario.provincia).select(
        usuario.provincia
      );
      cy.get(selectoresRegistro.camposFormulario.aceptoPolitica).click();
    });
  });

  it('[TC0027] deberia no poder registrarse sin aceptar el aviso legal', () => {});

  it('[TC0028] deberia registrar nuevo usuario si todos los campos estan rellenos', () => {});

  it('[TC0031] deberia mostrar error si el usuario ya se ha registrado previamente', () => {});

  it('[TC0029] deberia navegar al aviso legal cuando se clica en el link', () => {
    cy.get('a').contains('Aviso legal').invoke('removeAttr', 'target').click();
    cy.url().should('include', '/aviso-legal/');
  });

  it('[TC0030] deberia navegar a la política de privacidad cuando se clica en el link', () => {
    cy.get('a')
      .contains('política de privacidad')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('include', '/politica-de-privacidad/');
  });
});
