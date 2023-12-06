document.addEventListener('DOMContentLoaded', function() {
    var h5Elements = document.querySelectorAll('.album-info h5');
    
    h5Elements.forEach(function(h5) {
        var randomColor = getRandomColor();
        h5.style.color = randomColor;
    });
    
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});