import { Sabor } from '../types/pizza';
import arpilImage from '@assets/arpil.png';
import beatballsImage from '@assets/beatballs.png';
import donateloImage from '@assets/donatelo.png';
import irmaImage from '@assets/irma.png';
import krangImage from '@assets/krang.png';
import leonardoImage from '@assets/leonardo.png';
import micheImage from '@assets/miche.png';
import notKrangImage from '@assets/notKrang.png';
import rafaImage from '@assets/rafa.png';
import splinterImage from '@assets/splinter.png';
import veganx98Image from '@assets/veganx98.png';

export const sabores: Sabor[] = [
  {
    id: 'Rafaello',
    nombre: 'Rafaello',
    imagen: rafaImage,
    precio: 2500.0,
  },
  {
    id: 'Krang',
    nombre: 'Krang',
    imagen: krangImage,
    precio: 7000.0,
  },
  {
    id: 'AprilMargherita',
    nombre: 'April Margherita',
    imagen: arpilImage,
    precio: 4000.0,
  },
  {
    id: 'Donatello',
    nombre: 'Donatello',
    imagen: donateloImage,
    precio: 5000.0,
  },
  {
    id: 'Splinter',
    nombre: 'Splinter',
    imagen: splinterImage,
    precio: 5000.0,
  },
  {
    id: 'BeatBalls',
    nombre: 'Beat Balls',
    imagen: beatballsImage,
    precio: 5000.0,
  },
  {
    id: 'Leonardo',
    nombre: 'Leonardo',
    imagen: leonardoImage,
    precio: 5000.0,
  },
  {
    id: 'Irma',
    nombre: 'Irma',
    imagen: irmaImage,
    precio: 5000.0,
  },
  {
    id: 'Michelangelo',
    nombre: 'Michelangelo',
    imagen: micheImage,
    precio: 5000.0,
  },
  {
    id: 'Veganx98',
    nombre: 'Veganx del 98',
    imagen: veganx98Image,
    precio: 5000.0,
  },
  {
    id: 'NotKrang',
    nombre: 'Not Krang',
    imagen: notKrangImage,
    precio: 5000.0,
  }
];