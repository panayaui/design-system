export class EntityTypeEnum {
  static readonly DEFECT = new EntityTypeEnum('DEFECT', { name: 'defect', iconName: 'bug', editable: true } );
  static readonly FEATURE = new EntityTypeEnum('FEATURE', { name: 'feature', iconName: 'box', editable: true } );
  static readonly REQUIREMENT = new EntityTypeEnum('REQUIREMENT', { name: 'requirement', iconName: 'box', editable: true } );
  static readonly WORKSTREAM = new EntityTypeEnum('WORKSTREAM', { name: 'workstream', iconName: 'honeycomb', editable: true } );
  static readonly ANALYSIS = new EntityTypeEnum('ANALYSIS', { name: 'analysis', iconName: 'honeycomb', editable: true } );
  static readonly USERSTORY = new EntityTypeEnum('USERSTORY', { name: 'user story', iconName: 'layers', editable: true } );
  // static readonly TASK = new EntityTypeEnum('TASK', { name: 'task', iconName: 'cloud-lightning', editable: true } );
  static readonly CORRECTION = new EntityTypeEnum('CORRECTION', { name: 'correction', iconName: 'tool', editable: true } );
  static readonly TEST = new EntityTypeEnum('TEST', { name: 'test', iconName: 'file-text', editable: true } );
  static readonly QUICKTEST = new EntityTypeEnum('QUICKTEST', { name: 'quick test', iconName: 'quick-test', editable: true } );
  static readonly AUTOMATEDTEST = new EntityTypeEnum('AUTOMATEDTEST', { name: 'automated test', iconName: 'film', editable: true } );
  static readonly PROJECT = new EntityTypeEnum('PROJECT', { name: 'project', iconName: 'home', editable: false } );
  static readonly CYCLE = new EntityTypeEnum('CYCLE', { name: 'cycle', iconName: 'circle', editable: false } );
  static readonly FOLDER = new EntityTypeEnum('FOLDER', { name: 'folder', iconName: 'folder-open', editable: false } );
  static readonly BUSINESSPROCESS = new EntityTypeEnum('BUSINESSPROCESS', { name: 'business process', iconName: 'switch', editable: false } );

  private constructor( private readonly key: string,
                       public readonly value: { name: string, iconName: string, editable: boolean } ) {}

  toString(): string {
    return this.key;
  }
}
