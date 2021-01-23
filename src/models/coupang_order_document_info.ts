import { DataTypes, Model } from 'sequelize';

class CoupangOrderDocumentInfo {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'coupang_order_document_info',
      {
        coupangOrderDocumentInfoId: {
          field: 'coupang_order_document_info_id',
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        fileName: {
          field: 'file_name',
          type: DataTypes.STRING,
          allowNull: false,
        },
        downloadCount: {
          field: 'download_count',
          type: DataTypes.INTEGER.UNSIGNED,
        },
        registeredDate: {
          field: 'registered_date',
          type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
      },
      {
        tableName: 'coupang_order_document_info',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default CoupangOrderDocumentInfo;