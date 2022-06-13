import React from 'react'

export default function Header() {
    return (
        <>  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Ludoteca</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="">Catalogo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/categories">Categorias</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Autores</a>
                        </li>
                        <li>
                            <button class="btn bg-white"><i class="bi bi-person-circle p-1"></i>Sign in</button>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
        </>
    )
}
