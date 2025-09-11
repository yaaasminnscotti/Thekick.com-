import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('thekick_oficial', 'postgres', '9375', {
  host: 'localhost',      // ou IP do servidor PostgreSQL
  dialect: 'postgres',    // define que é PostgreSQL
  logging: false,         // true para ver os logs SQL
  port: 5432,            
});

try {
  await sequelize.authenticate();
  console.log('Conexão com o PostgreSQL realizada com sucesso!');
} catch (error) {
  console.error('Não foi possível conectar ao banco de dados:', error);
}

export default sequelize;
