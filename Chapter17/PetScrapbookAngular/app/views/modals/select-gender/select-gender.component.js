"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var SelectGenderComponent = (function () {
    function SelectGenderComponent(params) {
        this.params = params;
        this.genders = ["Female", "Male", "Other"];
        this.gender = params.context;
    }
    SelectGenderComponent.prototype.onDoneTap = function () {
        this.params.closeCallback(this.genders[this.gender]);
    };
    return SelectGenderComponent;
}());
SelectGenderComponent = __decorate([
    core_1.Component({
        selector: "select-gender",
        templateUrl: "views/modals/select-gender/select-gender.html",
        styleUrls: ["views/modals/select-gender/select-gender.css"]
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
], SelectGenderComponent);
exports.SelectGenderComponent = SelectGenderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWdlbmRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWxlY3QtZ2VuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxrRUFBc0U7QUFRdEUsSUFBYSxxQkFBcUI7SUFJOUIsK0JBQW9CLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBRjdDLFlBQU8sR0FBa0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBR2pELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBRUQseUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxxQkFBcUI7SUFOakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSwrQ0FBK0M7UUFDNUQsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7S0FDNUQsQ0FBQztxQ0FNOEIsZ0NBQWlCO0dBSnBDLHFCQUFxQixDQVdqQztBQVhZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInNlbGVjdC1nZW5kZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwidmlld3MvbW9kYWxzL3NlbGVjdC1nZW5kZXIvc2VsZWN0LWdlbmRlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1widmlld3MvbW9kYWxzL3NlbGVjdC1nZW5kZXIvc2VsZWN0LWdlbmRlci5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RHZW5kZXJDb21wb25lbnQge1xuICAgIGdlbmRlcjogbnVtYmVyO1xuICAgIGdlbmRlcnM6IEFycmF5PHN0cmluZz4gPSBbXCJGZW1hbGVcIiwgXCJNYWxlXCIsIFwiT3RoZXJcIl07IFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyBcbiAgICAgICAgdGhpcy5nZW5kZXIgPSBwYXJhbXMuY29udGV4dDsgXG4gICAgfVxuXG4gICAgb25Eb25lVGFwKCk6IGFueSB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodGhpcy5nZW5kZXJzW3RoaXMuZ2VuZGVyXSk7IFxuICAgIH1cbn0iXX0=