export namespace Info {
  export class resume {
    // skills: object[];
    design: Object[];
    editing: Object[];
    admin: Object[];
    languages: Object[];
    utilities: Object[];
    databases: Object[];

    constructor(titleName: 'producer' | 'developer') {
      switch (titleName) {
        case 'producer':
          this.design = [{ app: 'Figma', class: '' }];
          this.editing = [{ app: 'DaVinci Resolve', class: '' }];
          this.admin = [{ app: 'Microsoft Word', class: '' }];
          break;
        case 'developer':
          this.languages = [{ app: 'JavaScript', class: '' }];
          this.utilities = [{ app: 'GitHub', class: '' }];
          this.databases = [{ app: 'MySQL', class: '' }];
          break;
      }
    }

    buildSkills(data: Array<Object[]>) {
      // Process data here
      console.log(typeof data);
    }
  }

  //--🠊 console.log('|🠊 Info.js Detected! 🠈|'); 🠈--//
}
