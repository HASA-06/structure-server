import { DataTypes, Model } from 'sequelize';

class UserStructure {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'user_structure',
      {
        name: {
          field: 'name',
          type: DataTypes.STRING,
          allowNull: false,
        },
        parameter: {
          field: 'parameter',
          type: DataTypes.STRING,
          allowNull: false
        },
        code: {
          field: 'code',
          type: DataTypes.TINYINT,
          allowNull: false
        },
        description: {
          field: 'description',
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: 'user_structure',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default UserStructure;