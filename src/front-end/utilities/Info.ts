export namespace Info {
  export class resume {
    skills: object[];

    constructor() {
      this.skills = [{ blah: 'ffffff' }];
    }

    buildSkills(data: any) {
      // Process data here
      console.log(data);
    }
  }

  //--🠊 console.log('|🠊 Info.js Detected! 🠈|'); 🠈--//
}
