"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var SelectDateComponent = (function () {
    function SelectDateComponent(params) {
        this.params = params;
        this.date = params.context;
    }
    SelectDateComponent.prototype.onDoneTap = function () {
        this.params.closeCallback(this.date);
    };
    return SelectDateComponent;
}());
SelectDateComponent = __decorate([
    core_1.Component({
        selector: "select-date",
        templateUrl: "views/modals/select-date/select-date.html",
        styleUrls: ["views/modals/select-date/select-date.css"]
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
], SelectDateComponent);
exports.SelectDateComponent = SelectDateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0LWRhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGtFQUFzRTtBQU90RSxJQUFhLG1CQUFtQjtJQUc5Qiw2QkFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFFRCx1Q0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksbUJBQW1CO0lBTC9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsMkNBQTJDO1FBQ3hELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO0tBQ3hELENBQUM7cUNBSTRCLGdDQUFpQjtHQUhsQyxtQkFBbUIsQ0FVL0I7QUFWWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7IFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwic2VsZWN0LWRhdGVcIixcbiAgdGVtcGxhdGVVcmw6IFwidmlld3MvbW9kYWxzL3NlbGVjdC1kYXRlL3NlbGVjdC1kYXRlLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9tb2RhbHMvc2VsZWN0LWRhdGUvc2VsZWN0LWRhdGUuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdERhdGVDb21wb25lbnQge1xuICBkYXRlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IFxuICAgIHRoaXMuZGF0ZSA9IHBhcmFtcy5jb250ZXh0OyAgICAgICAgICAgICAgICAgICAgXG4gIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICBvbkRvbmVUYXAoKTogYW55IHsgXG4gICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh0aGlzLmRhdGUpOyBcbiAgfSAgICAgICAgICAgICAgICAgICAgICAgICBcbn1cbiJdfQ==