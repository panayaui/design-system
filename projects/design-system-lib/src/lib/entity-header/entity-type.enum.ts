export class EntityTypeEnum {
  static readonly DEFECT = new EntityTypeEnum('DEFECT', { name: 'defect', iconName: 'chrome', editable: true } );
  static readonly FEATURE = new EntityTypeEnum('FEATURE', { name: 'feature', iconName: 'compass', editable: true } );
  static readonly REQUIREMENT = new EntityTypeEnum('REQUIREMENT', { name: 'requirement', iconName: 'clipboard', editable: true } );
  static readonly WORKSTREAM = new EntityTypeEnum('WORKSTREAM', { name: 'workstream', iconName: 'clock', editable: true } );
  static readonly ANALYSIS = new EntityTypeEnum('ANALYSIS', { name: 'analysis', iconName: 'cloud-drizzle', editable: true } );
  static readonly USERSTORY = new EntityTypeEnum('USERSTORY', { name: 'user story', iconName: 'cloud-off', editable: true } );
  static readonly TASK = new EntityTypeEnum('TASK', { name: 'task', iconName: 'cloud-lightning', editable: true } );
  static readonly CORRECTION = new EntityTypeEnum('CORRECTION', { name: 'correction', iconName: 'cloud-rain', editable: true } );
  static readonly TEST = new EntityTypeEnum('TEST', { name: 'test', iconName: 'cloud-snow', editable: true } );
  static readonly QUICKTEST = new EntityTypeEnum('QUICKTEST', { name: 'quick test', iconName: 'coffee', editable: true } );
  static readonly AUTOMATEDTEST = new EntityTypeEnum('AUTOMATEDTEST', { name: 'automated test', iconName: 'command', editable: true } );
  static readonly PROJECT = new EntityTypeEnum('PROJECT', { name: 'project', iconName: 'copy', editable: false } );
  static readonly CYCLE = new EntityTypeEnum('CYCLE', { name: 'cycle', iconName: 'cpu', editable: false } );
  static readonly FOLDER = new EntityTypeEnum('FOLDER', { name: 'folder', iconName: 'credit-card', editable: false } );
  static readonly BUSINESSPROCESS = new EntityTypeEnum('BUSINESSPROCESS', { name: 'business process', iconName: 'crosshair', editable: false } );

  private constructor( private readonly key: string,
                       public readonly value: { name: string, iconName: string, editable: boolean } ) {}

  toString(): string {
    return this.key;
  }
}
