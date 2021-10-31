import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  public current_user:any;

  constructor(public appService: AppService, public router: Router,public _route: ActivatedRoute) { }

  ngOnInit(

  ): void {
    if(Cookie.get("userId")){
    let user_id = this._route.snapshot.paramMap.get('user_id');

    this.appService.getCurrentRecord(user_id).subscribe(
    (data:any)=>{
      this.current_user = data
    },
    (error:any)=>{
      console.log(error.errorMessage);
    }
    )
  }else{
    this.router.navigate(["/login"])
  }

  }

}
