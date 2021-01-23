import { DataTypes, Model } from 'sequelize';

class Board {
  private model: Model;

  constructor(sequelize: any) {
    this.model = sequelize.define(
      'board',
      {
        boardId: {
          field: 'board_id',
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        title: {
          field: 'title',
          type: DataTypes.STRING,
          allowNull: false
        },
        content: {
          field: 'content',
          type: DataTypes.STRING,
          allowNull: false
        },
        userId: {
          field: 'user_id',
          type: DataTypes.STRING,
          allowNull: false
        },
        createdDate: {
          field: 'created_date',
          type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
      },
      {
        tableName: 'board',
        timestamps: false,
      }
    )
  }

  getModel(): Model {
    return this.model;
  }
}

export default Board;