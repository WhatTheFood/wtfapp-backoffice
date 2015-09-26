/**
 * Created by loic on 14/05/15.
 */

/**
 * @desc A simple directive for ask confirmation before run a function
 * @usage add ng-really-message and ng-really-click.
 * @keybinds enter to confirm, q or esc to escape
 */

app.directive('ngReallyClick',

  function($modal, hotkeys) {

    var ModalInstanceCtrl = function($scope, $modalInstance) {
      $scope.ok = function() {
        $modalInstance.close();
      };

      $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
      };

      // Keys
      hotkeys.add({
        combo: 'q',
        description: 'Quit the modal',
        callback: function() {
          $modalInstance.dismiss('cancel');
        }
      });

      hotkeys
        .add({
          combo: 'enter',
          description: 'Confirm the modal',
          callback: function() {
            $modalInstance.close();
          }
        });

    };

    return {
      restrict: 'A',
      scope:{
        ngReallyClick:"&",
        item:"="
      },
      link: function(scope, element, attrs) {


        element.bind('click', function() {
          var message = attrs.ngReallyMessage || "Are you sure ?";

          var modalHtml = '<div class="modal-body text-center">' + message + '</div>';
          modalHtml += '<div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">OK</button><button class="btn btn-warning" ng-click="cancel()">Cancel</button></div>';

          var modalInstance = $modal.open({
            template: modalHtml,
            controller: ModalInstanceCtrl
          });

          modalInstance.result.then(function() {
            scope.ngReallyClick({item:scope.item});
          }, function() {

            hotkeys.del('q');
            hotkeys.del('enter');
          });

        });

      }
    }
  }
);
