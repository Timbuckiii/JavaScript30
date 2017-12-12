const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular

    // Interpolated
    console.log('Hello, I am a %s string!', 'emoji')

    // Styled
    console.log('%c I am some formatted text', 'font-size:10px')

    // warning!
    console.warn('ohhh noooooo!')

    // Error :|
    console.error('shit!')

    // Info
    console.info('crocodiles eat 3-4 people per year')

    // Testing
    console.assert(p.ClassList.contains('ouch'), "that is wrong")

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.dir(p)

    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`)
        console.log(`This is ${dog.name}`)
        console.groupEnd(`${dog.name}`);
    })

    // counting
    console.count('Steve')
    console.count('Steve')
    console.count('Dave')
    console.count('Steve')
    console.count('Steve')
    console.count('Dave')

    // timing
    console.time('logging')
    console.log('nate')
    console.log('nate')
    console.log('nate')
    console.log('nate')
    console.log('nate')
    console.log('nate')
    console.log('nate')
    console.timeEnd('logging')

    //table
    console.table([hi, hello])