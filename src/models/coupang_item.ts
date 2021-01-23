import { DataTypes, Model } from 'sequelize';

class CoupangItem {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'coupang_item',
      {
        coupangItemId: {
          field: 'coupang_item_id',
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        vendorItemPackageId: {
          field: 'vendor_item_package_id',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false
        },
        vendorItemPackageName: {
          field: 'vendor_item_package_name',
          type: DataTypes.STRING,
          allowNull: false
        },
        productId: {
          field: 'product_id',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        vendorItemId: {
          field: 'vendor_item_id',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        vendorItemName: {
          field: 'vendor_item_name',
          type: DataTypes.STRING,
          allowNull: false,
        },
        salePrice: {
          field: 'sale_price',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        orderPrice: {
          field: 'order_price',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        discountPrice: {
          field: 'discount_price',
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        vendorSkuCode: {
          field: 'vendor_sku_code',
          type: DataTypes.STRING,
        },
        sellerProductId: {
          field: 'seller_product_id',
          type: DataTypes.INTEGER.UNSIGNED,
        },
        sellerProductName: {
          field: 'seller_product_name',
          type: DataTypes.STRING,
        },
        sellerProductItemName: {
          field: 'seller_product_item_name',
          type: DataTypes.STRING,
        }
      },
      {
        tableName: 'coupang_item',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default CoupangItem;