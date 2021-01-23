import { DataTypes, Model } from 'sequelize';

class Admin {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'admin',
      {
        adminId: {
          field: 'admin_id',
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name: {
          field: 'name',
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          field: 'email',
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          field: 'password',
          type: DataTypes.STRING,
          allowNull: false,
        },
        salt: {
          field: 'salt',
          type: DataTypes.STRING,
          allowNull: false,
        },
        registeredDate: {
          field: 'registered_date',
          type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
      },
      {
        tableName: 'admin',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default Admin;