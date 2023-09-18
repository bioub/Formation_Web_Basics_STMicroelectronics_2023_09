'use strict';
globalThis.globalScope = 'globalScope';
const scriptScope = 'scriptScope'; // selon les cas peut être script, closure ou module scope

function a() {
  const closureAScope = 'closureAScope';

  function b() {
    const closureBScope = 'closureBScope';

    function c() {
      const localScope = 'localScope';
      if (true) {
        const blockScope = 'blockScope';
        console.log(blockScope);
        console.log(localScope);
        console.log(closureBScope);
        console.log(closureAScope);
        console.log(scriptScope);
        console.log(globalScope);
      }

    }

    c();
  }

  b();
}

a();

