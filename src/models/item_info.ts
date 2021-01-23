import { DataTypes, Model } from 'sequelize';

class ItemInfo {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'item_info',
      {
        itemInfoId: {
          field: 'item_info_id',
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
        originalCost: {
          field: 'original_cost',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false
        },
        currentCost: {
          field: 'current_cost',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        tableName: 'item_info',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default ItemInfo;