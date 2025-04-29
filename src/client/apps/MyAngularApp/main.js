import osjs from 'osjs'; // Webpack external. Same as 'window.OSjs'
import {name as applicationName} from './metadata.json';

osjs.register(applicationName, (core, args, options, metadata) => {
  const proc = core.make('osjs/application', {args, options, metadata});

  // Create your windows etc here
  const win = proc.createWindow({title: 'My Window'});

  win.on('destroy', () => proc.destroy());
  return proc;
});