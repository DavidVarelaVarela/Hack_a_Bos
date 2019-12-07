import React from "react";

export function Register() {
  return (
    <React.Fragment>
      <header className="main-header">
        <h1>Notes App</h1>
      </header>

      <main>
        <section className="utility-form">
          <form className="generic" action="">
            <h2>Introduce tus datos</h2>
            <fieldset>
              <label for="name">Nombre</label>
              <input type="text" id="name" />
            </fieldset>
            <fieldset>
              <label for="name">Correo electrónico</label>
              <input type="text" id="name" />
            </fieldset>
            <fieldset>
              <label for="name">Contraseña</label>
              <input type="text" id="password" />
            </fieldset>
            <fieldset>
              <label for="name">Repite contraseña</label>
              <input type="text" id="password" />
            </fieldset>

            <div className="actions">
              <button>Registrarse</button>
              <ul>
                <li>
                  <a href="/login.html" className="ui-action">
                    Ya tengo una cuenta
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </section>
      </main>
    </React.Fragment>
  );
}
