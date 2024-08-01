document.getElementById('yenigelen-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('yenigelen-section').style.display = 'flex';
    document.getElementById('beymen-edit').style.display = 'none';

    document.getElementById('cok-satanlar-section').style.display = 'none';
    document.getElementById('beymen-exclusive-section').style.display = 'none';
    document.getElementById('yenigelen-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('beymen-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('beymen-edit').style.display = 'flex';
    document.getElementById('yenigelen-section').style.display = 'none';
    document.getElementById('cok-satanlar-section').style.display = 'none';
    document.getElementById('beymen-exclusive-section').style.display = 'none';
    document.getElementById('beymen-edit').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('cok-satanlar-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('yenigelen-section').style.display = 'none';
    document.getElementById('cok-satanlar-section').style.display = 'flex';
    document.getElementById('beymen-edit').style.display = 'none';
     document.getElementById('beymen-exclusive-section').style.display = 'none';
    document.getElementById('cok-satanlar-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('beymen-exclusive-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('beymen-edit').style.display = 'none';
   document.getElementById('yenigelen-section').style.display = 'none';
    document.getElementById('cok-satanlar-section').style.display = 'none';
    document.getElementById('beymen-exclusive-section').style.display = 'flex';
    document.getElementById('beymen-exclusive-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('show-categories-link').addEventListener('click', function(event) {
    event.preventDefault();
    var hiddenLink = document.getElementById('hidden-link');
    if (hiddenLink.style.display === 'none' || hiddenLink.style.display === '') {
        hiddenLink.style.display = 'inline-block';
        this.textContent = 'DAHA AZ GÖSTER'; // Buton metnini değiştir
    } else {
        hiddenLink.style.display = 'none';
        this.textContent = 'DAHA FAZLA GÖSTER'; // Buton metnini geri değiştir
    }
});
document.getElementById('link-tr').addEventListener('click', function(event) {
    event.preventDefault();
   
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.nav-item.dropdown > .nav-link');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });
});


//kadın linkinin üstüne gelince 
document.addEventListener('DOMContentLoaded', function() {
    var kadinMenu = document.getElementById('kadin-menu');
    var kadinLink = document.getElementById('kadin');

    // Kadın linkine mouseover geldiğinde menüyü göster
    kadinLink.addEventListener('mouseover', function() {
        kadinMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Kadın menüsüne mouseover geldiğinde menüyü göster
    kadinMenu.addEventListener('mouseover', function() {
        kadinMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Kadın menüsünden mouseleave olduğunda menüyü gizle
    kadinMenu.addEventListener('mouseleave', function() {
        kadinMenu.style.display = 'none';
        document.querySelector('.buttom').style.display = 'none';
        document.querySelector('.banner').style.display = 'block';
        document.getElementById('carouselExampleIndicators').style.display = 'block';
    });

    // Kadın linkinden mouseleave olduğunda menüyü gizleme
    kadinLink.addEventListener('mouseleave', function() {
        // Menüyü gizleme işlemini menüden ayrılma olayında yapacağız
    });

    // Sayfanın herhangi bir yerine tıklanırsa menüyü gizle
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#kadin, #kadin-menu')) {
            kadinMenu.style.display = 'none';
            document.querySelector('.buttom').style.display = 'none';
            document.querySelector('.banner').style.display = 'block';
            document.getElementById('carouselExampleIndicators').style.display = 'block';
        }
    });
});


// erkek menü için
document.addEventListener('DOMContentLoaded', function() {
    var erkekMenu = document.getElementById('erkek-menu');
    var erkekLink = document.getElementById('erkek');

    // Erkek linkine mouseover geldiğinde menüyü göster
    erkekLink.addEventListener('mouseover', function() {
        erkekMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Erkek menüsüne mouseover geldiğinde menüyü göster
    erkekMenu.addEventListener('mouseover', function() {
        erkekMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Erkek menüsünden mouseleave olduğunda menüyü gizle
    erkekMenu.addEventListener('mouseleave', function() {
        erkekMenu.style.display = 'none';
        document.querySelector('.buttom').style.display = 'none';
        document.querySelector('.banner').style.display = 'block';
        document.getElementById('carouselExampleIndicators').style.display = 'block';
    });

    // Erkek linkinden mouseleave olduğunda menüyü gizleme
    erkekLink.addEventListener('mouseleave', function() {
        // Menüyü gizleme işlemini menüden ayrılma olayında yapacağız
    });

    // Sayfanın herhangi bir yerine tıklanırsa menüyü gizle
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#erkek, #erkek-menu')) {
            erkekMenu.style.display = 'none';
            document.querySelector('.buttom').style.display = 'none';
            document.querySelector('.banner').style.display = 'block';
            document.getElementById('carouselExampleIndicators').style.display = 'block';
        }
    });
});



// cocuk 
document.addEventListener('DOMContentLoaded', function() {
    var cocukMenu = document.getElementById('cocuk-menu');
    var cocukLink = document.getElementById('cocuk');

    // Çocuk linkine mouseover geldiğinde menüyü göster
    cocukLink.addEventListener('mouseover', function() {
        cocukMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Çocuk menüsüne mouseover geldiğinde menüyü göster
    cocukMenu.addEventListener('mouseover', function() {
        cocukMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Çocuk menüsünden mouseleave olduğunda menüyü gizle
    cocukMenu.addEventListener('mouseleave', function() {
        cocukMenu.style.display = 'none';
        document.querySelector('.buttom').style.display = 'none';
        document.querySelector('.banner').style.display = 'block';
        document.getElementById('carouselExampleIndicators').style.display = 'block';
    });

    // Çocuk linkinden mouseleave olduğunda menüyü gizleme
    cocukLink.addEventListener('mouseleave', function() {
        // Menüyü gizleme işlemini menüden ayrılma olayında yapacağız
    });

    // Sayfanın herhangi bir yerine tıklanırsa menüyü gizle
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#cocuk, #cocuk-menu')) {
            cocukMenu.style.display = 'none';
            document.querySelector('.buttom').style.display = 'none';
            document.querySelector('.banner').style.display = 'block';
            document.getElementById('carouselExampleIndicators').style.display = 'block';
        }
    });
});


// kozmetik
document.addEventListener('DOMContentLoaded', function() {
    var kozmetikMenu = document.getElementById('kozmetik-menu');
    var kozmetikLink = document.getElementById('kozmetik');

    // Kozmetik linkine mouseover geldiğinde menüyü göster
    kozmetikLink.addEventListener('mouseover', function() {
        kozmetikMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Kozmetik menüsüne mouseover geldiğinde menüyü göster
    kozmetikMenu.addEventListener('mouseover', function() {
        kozmetikMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Kozmetik menüsünden mouseleave olduğunda menüyü gizle
    kozmetikMenu.addEventListener('mouseleave', function() {
        kozmetikMenu.style.display = 'none';
        document.querySelector('.buttom').style.display = 'none';
        document.querySelector('.banner').style.display = 'block';
        document.getElementById('carouselExampleIndicators').style.display = 'block';
    });

    // Kozmetik linkinden mouseleave olduğunda menüyü gizleme
    kozmetikLink.addEventListener('mouseleave', function() {
        // Menüyü gizleme işlemini menüden ayrılma olayında yapacağız
    });

    // Sayfanın herhangi bir yerine tıklanırsa menüyü gizle
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#kozmetik, #kozmetik-menu')) {
            kozmetikMenu.style.display = 'none';
            document.querySelector('.buttom').style.display = 'none';
            document.querySelector('.banner').style.display = 'block';
            document.getElementById('carouselExampleIndicators').style.display = 'block';
        }
    });
});


//ev-mobilya 


document.addEventListener('DOMContentLoaded', function() {
    var kozmetikMenu = document.getElementById('ev-menu');
    var kozmetikLink = document.getElementById('ev');

    
    kozmetikLink.addEventListener('mouseover', function() {
        kozmetikMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Kozmetik menüsüne mouseover geldiğinde menüyü göster
    kozmetikMenu.addEventListener('mouseover', function() {
        kozmetikMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Kozmetik menüsünden mouseleave olduğunda menüyü gizle
    kozmetikMenu.addEventListener('mouseleave', function() {
        kozmetikMenu.style.display = 'none';
        document.querySelector('.buttom').style.display = 'none';
        document.querySelector('.banner').style.display = 'block';
        document.getElementById('carouselExampleIndicators').style.display = 'block';
    });

    // Kozmetik linkinden mouseleave olduğunda menüyü gizleme
    kozmetikLink.addEventListener('mouseleave', function() {
        // Menüyü gizleme işlemini menüden ayrılma olayında yapacağız
    });

    // Sayfanın herhangi bir yerine tıklanırsa menüyü gizle
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#ev, #ev-menu')) {
            kozmetikMenu.style.display = 'none';
            document.querySelector('.buttom').style.display = 'none';
            document.querySelector('.banner').style.display = 'block';
            document.getElementById('carouselExampleIndicators').style.display = 'block';
        }
    });
});

//anne-bebek

document.addEventListener('DOMContentLoaded', function() {
    var kozmetikMenu = document.getElementById('anne-bebek-menu');
    var kozmetikLink = document.getElementById('anne-bebek');

    
    kozmetikLink.addEventListener('mouseover', function() {
        kozmetikMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Kozmetik menüsüne mouseover geldiğinde menüyü göster
    kozmetikMenu.addEventListener('mouseover', function() {
        kozmetikMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Kozmetik menüsünden mouseleave olduğunda menüyü gizle
    kozmetikMenu.addEventListener('mouseleave', function() {
        kozmetikMenu.style.display = 'none';
        document.querySelector('.buttom').style.display = 'none';
        document.querySelector('.banner').style.display = 'block';
        document.getElementById('carouselExampleIndicators').style.display = 'block';
    });

    // Kozmetik linkinden mouseleave olduğunda menüyü gizleme
    kozmetikLink.addEventListener('mouseleave', function() {
        // Menüyü gizleme işlemini menüden ayrılma olayında yapacağız
    });

    // Sayfanın herhangi bir yerine tıklanırsa menüyü gizle
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#anne-bebek, #anne-bebek-menu')) {
            kozmetikMenu.style.display = 'none';
            document.querySelector('.buttom').style.display = 'none';
            document.querySelector('.banner').style.display = 'block';
            document.getElementById('carouselExampleIndicators').style.display = 'block';
        }
    });
});





document.getElementById('form-kontrol').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('form-close').style.display = 'flex';
});

document.getElementById('form-close').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('form-close').style.display = 'none';
});

















//reborn menü için  


document.addEventListener('DOMContentLoaded', function() {
    var kozmetikMenu = document.getElementById('reborn-menu');
    var kozmetikLink = document.getElementById('reborn');

    
    kozmetikLink.addEventListener('mouseover', function() {
        kozmetikMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Kozmetik menüsüne mouseover geldiğinde menüyü göster
    kozmetikMenu.addEventListener('mouseover', function() {
        kozmetikMenu.style.display = 'block';
        document.querySelector('.buttom').style.display = 'block';
        document.querySelector('.banner').style.display = 'none';
        document.getElementById('carouselExampleIndicators').style.display = 'none';
    });

    // Kozmetik menüsünden mouseleave olduğunda menüyü gizle
    kozmetikMenu.addEventListener('mouseleave', function() {
        kozmetikMenu.style.display = 'none';
        document.querySelector('.buttom').style.display = 'none';
        document.querySelector('.banner').style.display = 'block';
        document.getElementById('carouselExampleIndicators').style.display = 'block';
    });

    // Kozmetik linkinden mouseleave olduğunda menüyü gizleme
    kozmetikLink.addEventListener('mouseleave', function() {
        // Menüyü gizleme işlemini menüden ayrılma olayında yapacağız
    });

    // Sayfanın herhangi bir yerine tıklanırsa menüyü gizle
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#reborn, #reborn-menu')) {
            kozmetikMenu.style.display = 'none';
            document.querySelector('.buttom').style.display = 'none';
            document.querySelector('.banner').style.display = 'block';
            document.getElementById('carouselExampleIndicators').style.display = 'block';
        }
    });
});
































// scrol için  js kodu 
  // Show the scroll-to-top button when scrolling down
  window.onscroll = function() {
    var scrollTopButton = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

// Scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

