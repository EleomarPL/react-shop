const Index = () => {
  return (
    <section>
      <h1 className="text-center">Yard Sale</h1>
      <p className="mt-4">
        Sitio web sin funcionalidad completa de Logeo o Registro de usuarios, usando
        una API externa para simular información de ventas, con el fin de aplicar habilidades con manejo de rutas.
      </p>
      <picture className="d-flex justify-content-center">
        <source srcSet={ require('../img/home.webp').default } />
        <img srcSet={ require('../img/home.png').default }
          style={ {
            height: '20rem',
            objectFit: 'contain'
          } }
        />
      </picture>
    </section>
  );
};

export default Index;