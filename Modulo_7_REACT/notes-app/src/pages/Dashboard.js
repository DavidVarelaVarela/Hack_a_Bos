import React from "react";

export function Dashboard() {
  return (
    <React.Fragment>
      <header class="main-header auth">
        <div class="actions" role="navigation">
          <a href="#tags" id="tags-toggle">
            <svg
              width="16"
              height="13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#C86818"
                stroke-width="3"
                d="M0 1.5h16M0 6.5h16M0 11.5h16"
              />
            </svg>
          </a>
        </div>

        <h1>Notes App</h1>
        <h2>#tag1</h2>

        <div class="profile">
          Hola Marta
          <a href="/logout" class="ui-action">
            Salir
          </a>
        </div>
      </header>

      <main>
        <section class="app" id="app">
          <header>
            <h2>Notes</h2>
            <nav>
              <ul class="tag-list" id="tags">
                <li class="selected">
                  <a href="#">#tag1</a>
                </li>
                <li>
                  <a href="#">#tag2</a>
                </li>
                <li>
                  <a href="#">#tag3</a>
                </li>
              </ul>
            </nav>
          </header>

          <article class="main-list">
            <header>
              <h2>List</h2>
              <nav>
                <form class="generic">
                  <input type="search" id="filter" name="filter" />
                </form>
                <button class="image-button">New</button>
              </nav>
            </header>
            <div class="notes-wrapper">
              <ul class="notes-list">
                <li>
                  <a href="#">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias sapiente id vero ad labore corporis iste. Quae
                      enim maxime incidunt nam. Officia facere cumque impedit,
                      fuga non deleniti ipsam. Obcaecati?
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias sapiente id vero ad labore corporis iste. Quae
                      enim maxime incidunt nam. Officia facere cumque impedit,
                      fuga non deleniti ipsam. Obcaecati?
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias sapiente id vero ad labore corporis iste. Quae
                      enim maxime incidunt nam. Officia facere cumque impedit,
                      fuga non deleniti ipsam. Obcaecati?
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias sapiente id vero ad labore corporis iste. Quae
                      enim maxime incidunt nam. Officia facere cumque impedit,
                      fuga non deleniti ipsam. Obcaecati?
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias sapiente id vero ad labore corporis iste. Quae
                      enim maxime incidunt nam. Officia facere cumque impedit,
                      fuga non deleniti ipsam. Obcaecati?
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias sapiente id vero ad labore corporis iste. Quae
                      enim maxime incidunt nam. Officia facere cumque impedit,
                      fuga non deleniti ipsam. Obcaecati?
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias sapiente id vero ad labore corporis iste. Quae
                      enim maxime incidunt nam. Officia facere cumque impedit,
                      fuga non deleniti ipsam. Obcaecati?
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias sapiente id vero ad labore corporis iste. Quae
                      enim maxime incidunt nam. Officia facere cumque impedit,
                      fuga non deleniti ipsam. Obcaecati?
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias sapiente id vero ad labore corporis iste. Quae
                      enim maxime incidunt nam. Officia facere cumque impedit,
                      fuga non deleniti ipsam. Obcaecati?
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias sapiente id vero ad labore corporis iste. Quae
                      enim maxime incidunt nam. Officia facere cumque impedit,
                      fuga non deleniti ipsam. Obcaecati?
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias sapiente id vero ad labore corporis iste. Quae
                      enim maxime incidunt nam. Officia facere cumque impedit,
                      fuga non deleniti ipsam. Obcaecati?
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias sapiente id vero ad labore corporis iste. Quae
                      enim maxime incidunt nam. Officia facere cumque impedit,
                      fuga non deleniti ipsam. Obcaecati?
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article class="note empty">
            <header>
              <p>Selecciona una nota para ver y editar</p>
            </header>
          </article>

          <article class="note with-content">
            <form>
              <fieldset class="meta">
                <label for="title">Título</label>
                <input
                  type="text"
                  id="title"
                  class="title"
                  value="Lorem ipsum dolor sit amet"
                />
                <label for="tags">Tags</label>
                <input
                  type="text"
                  id="tags"
                  class="tags"
                  value="#tag1, #tag2"
                />
              </fieldset>
              <div class="actions">
                <a href="#" class="ui-action delete">
                  Borrar nota
                </a>
              </div>
              <fieldset class="content">
                <label for="content">Contenido</label>
                <textarea id="content" cols="30" rows="10">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vitae reprehenderit impedit magnam fuga. Blanditiis corporis
                  amet nesciunt earum deserunt, facilis quos atque dolorem
                  asperiores, consequuntur cupiditate, soluta incidunt odio
                  beatae? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ipsa eveniet obcaecati impedit rem veritatis a
                  cupiditate accusantium nulla qui est laudantium voluptatum,
                  adipisci, aut sit, maxime eaque molestiae unde iure.
                </textarea>
              </fieldset>
              <div class="back">
                <button id="note-toggle" class="image-button">
                  Ver notas
                </button>
              </div>
            </form>
          </article>
        </section>
      </main>
    </React.Fragment>
  );
}
