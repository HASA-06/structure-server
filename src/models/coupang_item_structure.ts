import { DataTypes, Model } from 'sequelize';

class CoupangItemStructure {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'coupang_item_structure',
      {
        name: {
          field: 'name',
          type: DataTypes.STRING,
          allowNull: false,
        },
        parameter: {
          field: 'parameter',
          type: DataTypes.STRING,
          allowNull: false,
        },
        code: {
          field: 'code',
          type: DataTypes.INTEGER.UNSIGNED,
        },
        description: {
          field: 'description',
          type: DataTypes.STRING,
        },
      },
      {
        tableName: 'coupang_item_structure',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default CoupangItemStructure;