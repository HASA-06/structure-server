import { DataTypes, Model } from 'sequelize';

class User {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'user',
      {
        userId: {
          field: 'user_id',
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
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
          allowNull: false
        },
        salt: {
          field: 'salt',
          type: DataTypes.STRING,
          allowNull: false
        },
        name: {
          field: 'name',
          type: DataTypes.STRING,
          allowNull: false
        },
        registeredDate: {
          field: 'registered_date',
          type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
      },
      {
        tableName: 'user',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default User;