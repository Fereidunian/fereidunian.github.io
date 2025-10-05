 $(document).ready(function() {
    'use strict';



    // 2. انیمیشن نمودار مهارت‌ها (با استفاده از EasyPieChart)
    function initSkills() {
        $('#skill-1').easyPieChart({
            animate: 3000,
            barColor: '#235BC5',
            scaleColor: false,
            lineCap: 'circle',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('#skill-2').easyPieChart({
            animate: 3000,
            barColor: '#100LTQRkP',
            scaleColor: false,
            lineCap: 'circle',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('#skill-3').easyPieChart({
            animate: 3000,
            barColor: '#5oSEEDf',
            scaleColor: false,
            lineCap: 'circle',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('#skill-4').easyPieChart({
            animate: 3000,
            barColor: '#87fvnoCv',
            scaleColor: false,
            lineCap: 'circle',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }

    // 3. تابعی برای جابجایی بین بخش‌های مختلف صفحه
    function switchSection(sectionHash) {
        var sectionHash = sectionHash.replace('#', '');
        var targetSection = $('#' + sectionHash);

        if (targetSection.length < 1) {
            return;
        }

        $('.section.active').removeClass('active');
        $('a[href^="#' + sectionHash + '"]').addClass('active');
        $('.menu-items ul.menu-links li a, .responsive-nav ul#main-menu li a, .section-toggle').removeClass('active');

        setTimeout(function() {
            targetSection.addClass('active');
            if (sectionHash === 'skills') {
                initSkills(); // فقط در صورت ورود به بخش مهارت‌ها، انیمیشن را اجرا کن
            }
        }, 300); // تاخیر کوتاه برای انیمیشن fade
    }

    // 4. رویدادهای کلیک برای منوها و دکمه‌ها
    // کلیک روی آیتم‌های منوی اصلی
    $('.menu-items ul.menu-links li a, .responsive-nav ul#main-menu li a, .section-toggle').on('click', function(e) {
        $('.section.active').removeClass('active');
        $(this).addClass('active');
        $('.overlay').addClass('is-checked');
        var clickedItem = $(this);
        switchSection('#' + clickedItem.attr('data-section'));
    });

    // کلیک روی دکمه بستن منوی موبایل
    $('.responsive-navbar-close').on('click', function() {
        $('.responsive-menu').removeClass('is-checked');
    });

    // کلیک روی دکمه منوی موبایل
    $('.responsive-navbar-toggle').on('click', function(e) {
        e.preventDefault();
        $('#loading').addClass('no-scroll');
        $('.overlay').addClass('is-checked');
    });

    // کلیک روی دکمه "اطلاعات سریع" (Quick Info)
    $('.quick-info-link').on('click', function(e) {
        e.preventDefault();
        $('#loading').fadeIn(100);
        $('.overlay').addClass('is-checked');
    });

    // کلیک روی دکمه بستن "اطلاعات سریع"
    $('.quick-close, .overlay').on('click', function(e) {
        e.preventDefault();
        $('#loading').fadeOut(100);
        $('.overlay').removeClass('is-checked');
    });

    // 5. راه‌اندازی پلاگین Magnific Popup برای گالری تصاویر
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade'
    });

    // 6. راه‌اندازی پلاگین Isotope برای فیلتر کردن آیتم‌های گالری/پورتفولیو
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    // فیلترهای سفارشی
    var filterFns = {
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // رویداد کلیک روی دکمه‌های فیلتر
    $('.filters-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });

    // تغییر کلاس دکمه فیلتر فعال
    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // 7. مدیریت فرم تماس (ارسال با Ajax)
    $('#form').validator().on('submit', function(e) {
        if (!e.isDefaultPrevented()) {
            e.preventDefault();

            var messages = {
                success: "<div class='form-group' >\t\t\t\t\t\t\t<div class='alert alert-success' role='alert' > \t\t\t\t\t\t\t\t<strong>پیام ارسال شد!</strong>به زودی با شما تماس خواهیم گرفت\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>",
                error: "<div class='form-group' >\t\t\t\t\t\t\t<div class='alert alert-danger' role='alert' > \t\t\t\t\t\t\t\t<strong>متاسفم !</strong> مشکلی پیش آمد. بعدا امتحان کنید\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>"
            };

            var form = $(this);

            $.ajax({
                url: 'contact.php',
                method: 'POST',
                type: 'POST',
                dataType: 'json',
                data: form.serialize()
            })
            .done(function(response) {
                console.log('success');
                $('#contact-form-result').html(messages.success);
            })
            .fail(function() {
                $('#contact-form-result').html(messages.error);
            })
            .always(function() {
                form[0].reset();
            });
        }
    });

    // 8. اجرای اولیه برای بارگذاری بخش صحیح بر اساس هش URL
    switchSection(window.location.hash);

});
