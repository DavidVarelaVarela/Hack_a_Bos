import React from "react";

export function Login() {
  return (
    <React.Fragment>
      <header className="main-header">
        <h1>Notes App</h1>
      </header>

      <main>
        <section className="utility-form">
          <form className="generic" action="">
            <h2>Iniciar sesión</h2>
            <fieldset className="ok">
              <label for="name">Correo electrónico</label>
              <input type="text" id="name" />
            </fieldset>
            <fieldset className="ko">
              <label for="name">Contraseña</label>
              <input type="text" id="password" />
            </fieldset>

            <div className="actions">
              <button>Acceder</button>
              <ul>
                <li>
                  <a href="/register.html" className="ui-action">
                    Registro
                  </a>
                </li>
                <li>
                  <a href="/recover.html" className="ui-action">
                    Recuperación de contraseña
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
