import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonData = {
    "images": [
      { "name": "Lucius", "perfil": "../../assets/Image/Lucius.png","fullimg": "../../assets/Image/Lucius.jpg", "description": "Musico y Artista su sueño es vivir grande aventuras por el mundo, para luego interpretarlas en su gran teatro donde creo y convivio con grandes musicos y artistas.En esos viejos pasillos donde se crio, fue donde forjaron su talento con la musica y con ello puede inspirar de manera magica a sus alidos en combate" ,"number": "1"},
      { "name": "Nehmud cahal", "perfil": "../../assets/Image/Nehmud cahal.png","fullimg": "../../assets/Image/Nehmud cahal foto.png", "description": "Despues de perder a su familia Nehmud vago por el mundo en busca de vengaza, cuando finalmente lo consiguio perdio todas las ganas de vivir que le quedaban, cuando fue rescatado por una mujer que frosesaba fe en la diosa Selune se unio a los clerios del crepusculo , con ellos enmendo su vida en viaje para poder llevar la palabra de su diosa y mejorar su capilla" ,"number": "2"},
      { "name": "Flengárin", "perfil": "../../assets/Image/Flemgarin.png ","fullimg": "../../assets/Image/Flengárin.jpg", "description": "Su padre entro en coma despues de el envenenamiento por brillo oscuro, su objetivo es encontrar la cura de esta agonica enfermedad y descubrir quien es el causante de la corrucion de su asentamiento elfico." ,"number": "3"},
      { "name": "Wild Caldel", "perfil": "../../assets/Image/Caldel.png","fullimg": "../../assets/Image/Caldel.jpg", "description": "Huerfano de joven un viejo maestro de las artes marciales lo rescoto a el junto asu aldea, creado como su hijo adoptivo Wild Candel logro aprende las mejores tecnico.Armado con un par de pantalones viejos, fue en busqueda de recorsos para crear un gran dojo para su Padre adoptivo y siguir con sus enseñansas " ,"number": "4"},
      { "name": "Kovas Leal Rojas", "perfil": "../../assets/Image/Dm.png","fullimg": "../../assets/Image/Kovas_Avatar.png", "description": "Creador del proyecto" ,"number": "5"},
    ]
  };
  

  getImages(): Observable<any> {
    return of(this.jsonData.images);
  }
}


