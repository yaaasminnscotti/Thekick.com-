import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Usuario extends Model {}

Usuario.init({
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_usuario: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  nascimento_usuario: {
    type: DataTypes.DATE,
    allowNull: false
  },
  telefone_usuario: {
    type: DataTypes.STRING(15),
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'usuarios',
  timestamps: false
});

export default Usuario;