function skillsMembers() {
  return {
    restrict: 'E',
    templateUrl: 'modules/skills/views/memeber.html',
    controller: 'SkillsMembersController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}