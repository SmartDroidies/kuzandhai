'use strict';

// Register `nameList` component, along with its associated controller and template
angular.
  module('nameList').
  component('nameList', {
    templateUrl: 'name-list/name-list.template.html',
    controller: ['$log', 'Name', 'Star',  
      function NameListController($log, Name, Star) {

        var self = this;
        
        self.alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
        self.stars = Star.query();
        //this.names = Name.query();
         
        self.setNames = function(indexAlp) {
           Name.query(function(users) {
             var matchNames = users; 
             if(indexAlp) {
               //$log.debug("Filter By - " + indexAlp.toUpperCase());
               //$log.debug("Count - " + _.size(matchNames));
               matchNames = _.filter(matchNames, function(name) { 
                 //$log.debug("Name - " + name.name + " - " + name.name.charAt(0).toUpperCase()); 
                 return (name.name.charAt(0).toUpperCase() == indexAlp.toUpperCase()) 
               });
             } 
             $log.debug("Name Size - " + _.size(matchNames))
             matchNames = _.sortBy(matchNames, 'name'); 
             self.names = matchNames; 
           });

        };

        self.indexed = function(alphabet) {
            self.idx = alphabet;
            //$log.debug("Indexed By - " + self.idx);
            self.setNames(self.idx);
        };

        self.byNaksha = function(star) {
            self.star= star;
            if(star) {
             $log.debug("Filtered By Naksha - " + star.code);
            }
            Name.query(function(users) {
             var matchNames = users; 
             if(star && star.code) {
               //$log.debug("Filter By - " + star.code.toUpperCase());
               //$log.debug("Count - " + _.size(matchNames));
               matchNames = _.filter(matchNames, function(name) { 
                 //$log.debug("Name - " + name.star.toUpperCase() + " - " + star.code.toUpperCase()); 
                 return (name.star.toUpperCase() == star.code.toUpperCase()) 
               });
             } 
             matchNames = _.sortBy(matchNames, 'name'); 
             
             self.names = matchNames; 
           });
        };

        self.showStars = function() {
            $log.debug("Display Start List for Selection");
        };

        //self.setNames();  

      }
    ]
  });