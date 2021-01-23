import { Sequelize } from 'sequelize';
import fs from 'fs';

class ObjectRelationMapping {
  private sequelize: Sequelize;

  constructor(sequelize: any) {
    this.sequelize = sequelize;
  }

  public async setSubModels() {
    fs.readdirSync(__dirname)
      .filter((file: string) => {
        return file.indexOf('.') !== 0 && (file.indexOf('ts') >=0 || file.indexOf('js') >= 0) && file.split('.')[0] !== 'index'
      })
      .forEach(async (file: string) => {
        console.log(file.split('.')[0]);
        const subModelClass = await import(`${ __dirname }/${file}`);
        this.sequelize.models[file.split('.')[0]] = new subModelClass.default(this.sequelize).getModel();
      });
  }
}

export default ObjectRelationMapping;