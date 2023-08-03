import { Component } from '@angular/core';
import { SharedDataService } from './shared-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'theWorks';
  searchText: string = '';
  inputEnabled: boolean = false;
  searchBoxVisible: boolean = false;
  searchSymbol:boolean=true;
  searchQuery: string = '';
  email: string = '';
  inputValueFromParent: string='';
  constructor(private sharedService: SharedDataService) {}
  openSearchInput() {
    this.searchBoxVisible = true;
    this.searchSymbol=false;
  }

  onInputBlur(event: any) {
    // Handle the blur event here
    this.sharedService.inputValue.next(event.target.value);
    console.log("Input blurred. Value: ", event.target.value);
  }

 

  onSubscribe() {
    // Basic email validation using regex pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (this.email && emailPattern.test(this.email)) {
      // Here, you can perform additional logic, like sending the email to the server for registration.
      // For this example, we'll just show an alert message to indicate successful registration.
      alert( 'Email registered successfully!');
      this.email = ''; // Clear the email input
    }
    else if(this.email ==''){
      alert('Please enter email');
    }
    else{
      alert('Please enter valid Email');
      this.email = ''; // Clear the email input
    }
  }
}
