
//setting up random image generator?//
var html = document.getElementsByTagName('html')[0];
var media_path_base = 'https://s3.amazonaws.com/takeok.seasons/'


var detroit_bgimgs = ['media/winter/winter1.jpg', 
                        'media/winter/winter2.jpg', 
                        'media/winter/winter3.jpg', 
                        'media/winter/winter4.jpg', 
                        'media/winter/winter5.jpg', 
                        'media/winter/winter6.jpg',
                        'media/winter/winter7.jpg',
                        'media/winter/winter8.jpg', 
                        'media/winter/winter9.jpg', 
                        'media/winter/winter10.jpg', 
                        'media/winter/winter11.jpg', 
                        'media/winter/winter12.jpg',
                        'media/winter/winter13.jpg',
                        'media/winter/winter14.jpg', 
                        'media/winter/winter15.jpg',
                        'media/winter/winter16.jpg',

                        ];
var bgimgs = {"winter"}:winter_bgimgs.map(function(currentValue)){return media_path_base+currentValue;})
};
var seasons = document.getElementsByClassName('trip');
var bgimg_curr;
var bgimg_new;
