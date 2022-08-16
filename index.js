const fruits  = {
{id: 1, title:  'Яблоко', price: 20, img:https://www.pngall.com/wp-content/uploads/2016/04/Apple-Fruit-PNG.png },
{id: 2, title:  'Яблоко', price: 30, img: https://www.pngall.com/wp-content/uploads/2016/05/Orange-PNG.png,
{id: 3, title:  'Яблоко', price: 40, img: https://pngimg.com/uploads/mango/mango_PNG9168.png,
}


const modal = $.modal({
    title: 'Kamil Modal',
    closable: true,
    content: `
    <h4>Modal is working</h4>
    <p> Lorem ipsum dolor sing </p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked')
            }},
        {text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked')
             modal.close()
            }}
    ]
});
