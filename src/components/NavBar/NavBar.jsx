import React from 'react';


export default function NavBar() {

    return (
        <nav class="navbar navbar-expand-md bg-light">
            <div class="container-fluid margin-red">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarTogglerDemo01" >
                    <a class="navbar-brand" href="#">dibujo marca </a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}