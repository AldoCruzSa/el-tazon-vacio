import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>
        Este es un espacio donde comparto mi pasión por la escritura. En mi blog, encontrarás una 
        colección de escritos originales que han surgido de mi propia creatividad, cada uno con 
        su propia historia que contar. Mi objetivo es crear una variedad de piezas literarias que 
        muestren mi amplia gama de intereses y perspectivas.
      </p>
      <p>
        A veces escribo con el objetivo de transmitir un mensaje, mientras que otras veces 
        simplemente escribo para explorar pensamientos. Sea cual sea el caso, 
        siempre trato de hacer que cada pieza sea auténtica y original. 
      </p>
    </Content>
  </Main>
);

export default About;
