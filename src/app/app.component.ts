import { Component, OnInit } from '@angular/core';
import { Geolocation, PermissionStatus, GeolocationPluginPermissions} from '@capacitor/geolocation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'capacitor-demo';
  public longitude: number = 0;
  public permissionStatus: PermissionStatus = { location: 'prompt', coarseLocation: 'prompt' };

  constructor() { }

  ngOnInit(): void {
    const coords = Geolocation.getCurrentPosition();
    if(this.isiOS()){
      console.log('Es Ios');
    }
    if(this.isAndroid()){
      console.log('Es Android');
    }
    console.log(coords);
    //this.requestLocationPermissions(); // Solicitar permisos cuando se inicie el componente
    //this.getCurrentPosition();
  }

  async requestLocationPermissions() {
    try {
      this.permissionStatus = await this.requestPermissions(); // Solicitar permisos y actualizar el estado
    } catch (error) {
      console.error('Error al solicitar permisos de geolocalización:', error);
    }
  }

  async requestPermissions(permissions?: GeolocationPluginPermissions): Promise<PermissionStatus> {
    if (Geolocation.requestPermissions) {
      return Geolocation.requestPermissions(permissions);
    } else {
      console.log('Geolocation.requestPermissions no está disponible en este entorno.');
      throw new Error('Geolocation.requestPermissions no está disponible en este entorno.');
    }
  }

  async getCurrentPosition() {
    try {
    
      if (this.permissionStatus.location === 'granted') {
        const coordinates = await Geolocation.getCurrentPosition();
        console.log('Current position:', coordinates.coords.latitude);
        this.longitude = coordinates.coords.latitude;
      } else {
        console.warn('No se tienen los permisos necesarios para acceder a la ubicación.');
      }
    } catch (error) {
      console.error('Error al obtener la posición actual:', error);
    }
  }
  isiOS() {
    return /iPad|iPhone|iPod/.test(window.navigator.userAgent);
  }
  
  // Función para verificar si el usuario está en un dispositivo Android
   isAndroid() {
    return /Android/.test(window.navigator.userAgent);
  }
  
  
}