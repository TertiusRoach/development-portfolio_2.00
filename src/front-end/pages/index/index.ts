import { GetSection } from 'utilities/GetSection';

export namespace Index {
  console.log(`🠊 ${'index'}.js Loaded 🠈`);

  $(function () {
    // Your jQuery operations

    // Example of using console.log
    console.log('Hello, this is a message logged with jQuery!');
  });

  new GetSection.forSection('🠊 GetSection.js Loaded 🠈');
}
