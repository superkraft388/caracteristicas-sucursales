const Sucursal = require('./sucursal');

test('debe crear una sucursal y obtener su información', () => {
    const sucursal = new Sucursal('Sucursal Central', 'Calle Falsa 123');
    expect(sucursal.obtenerInformacion()).toBe('Sucursal: Sucursal Central, Dirección: Calle Falsa 123');
});