import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../shared/user.class';
import { IUser } from '../shared/user.interface';
import { UsersService } from '../shared/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public form: FormGroup;
  public user: User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  matchId(control: FormControl): { matchId: boolean } | null {
    if (!this.user) {
      return null;
    }
    return this.user._id == control.value ? null : { matchId: false };
  }

  ngOnInit(): void {
    this.initForm();
    this.activatedRoute.paramMap.subscribe((map: ParamMap) => {
      const user_id = map.get('id');
      if (user_id) {
        this.userService.get(user_id).subscribe((user) => {
          this.user = user;
          this.initForm(user);
        });
      } else {
        this.initForm();
      }
    });
  }

  initForm(user: IUser = { _id: null, name: '', age: 0 }) {
    this.form = this.formBuilder.group({
      _id: [user._id, [this.matchId.bind(this)]],
      name: [user.name, Validators.required],
      age: [user.age, Validators.required],
    });
  }

  public submit() {
    if (this.form.valid) {
      if (this.user) {
        this.userService
          .update(this.form.value)
          .subscribe(() =>
            this.router.navigate(['..'], { relativeTo: this.activatedRoute })
          );
      } else {
        this.userService
          .add(this.form.value)
          .subscribe(() =>
            this.router.navigate(['..'], { relativeTo: this.activatedRoute })
          );
      }
    }
  }

  delete() {
    this.userService
      .delete(this.user)
      .subscribe(() =>
        this.router.navigate(['..'], { relativeTo: this.activatedRoute })
      );
  }
}
