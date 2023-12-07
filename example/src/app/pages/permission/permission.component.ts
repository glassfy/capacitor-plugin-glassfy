import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlassfyService } from 'src/app/services/glassfy.service';
import { GlassfyPermission } from '../../../../../dist/esm';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss'],
})
export class PermissionComponent implements OnInit {
  level = 1;

  permission$: Observable<GlassfyPermission>;

  constructor(private route: ActivatedRoute, private glassfy: GlassfyService) {}

  ngOnInit() {
    const permissionId = this.route.snapshot.paramMap.get('id');
    this.permission$ = this.glassfy.permissions$.pipe(
      map(permissions => {
        return permissions.all.find(p => p.permissionId == permissionId);
      }),
    );
  }
}
