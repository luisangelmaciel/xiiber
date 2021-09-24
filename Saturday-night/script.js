gsap.timeline({repeat:-1, defaults:{duration:0.375}})
    .fromTo('.bg',  {opacity:0}, {duration:1, opacity:0.4, ease:'power1.inOut'}, 0)
    .fromTo('.bg',  {scale:1.2}, {duration:5, scale:1.1, ease:'none'}, 0)
    .fromTo('.bg',  {rotation:0.1}, {duration:3, rotation:-0.1, ease:'none', yoyo:true, repeat:1}, 0) // helps smooth in FF
    .to('.bg, svg', {duration:1, opacity:0, stagger:0.25, ease:'power2.inOut'}, 4)

    .add('word1', 0.5)
    .to('.sMask',   {x:-420, ease:'steps(6)'}, 'word1')
    .to('.aMask',   {x:-420, ease:'steps(6)'}, 'word1+=0.06')
    .to('.tMask',   {x:-320, ease:'steps(5)'}, 'word1+=0.15')
    .to('.uMask',   {x:-432, ease:'steps(6)'}, 'word1+=0.35')
    .to('.rMask',   {x:-420, ease:'steps(6)'}, 'word1+=0.45')
    .to('.dMask',   {x:-420, ease:'steps(6)'}, 'word1+=0.6')
    .from('.rday',  {y:15, ease:'steps(1)'}, 'word1+=0.6')
    .to('.aMask2',  {x:-420, ease:'steps(6)'}, 'word1+=0.7')
    .to('.yMask',   {x:-350, ease:'steps(5)'}, 'word1+=0.75')

    .add('word2', 1.2)
    .to('.yMask2',  {x:-350, ease:'steps(5)'}, 'word2')
    .to('.tMask2',  {x:-350, ease:'steps(5)'}, 'word2+=0.05')
    .to('.rMask2',  {x:-420, ease:'steps(6)'}, 'word2+=0.1')
    .from('.h',     {x:15, ease:'steps(1)'}, 'word2+=0.25')
    .to('.tMask3',  {x:-320, ease:'steps(5)'}, 'word2+=0.4')

    .to('.txt',     {duration:0.5, opacity:0.15, ease:'power3.in', yoyo:true, yoyoEase:'power4', repeat:3}, 1.8)
    .to('.blur',    {duration:0.38, opacity:0.8, ease:'none', yoyo:true, repeat:3, repeatDelay:0.13}, 1.85)

    .to('.txt',     {duration:0.5, opacity:0, ease:'power2.inOut'}, 4.4)
    .to('.blur',    {duration:0.6, opacity:1, ease:'sine'}, 4.5)