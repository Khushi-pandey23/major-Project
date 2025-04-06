// membership.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  private showMembershipModalSubject = new BehaviorSubject<boolean>(false);
  showMembershipModal$ = this.showMembershipModalSubject.asObservable();
  
  constructor() { }
  
  openMembershipModal(): void {
    this.showMembershipModalSubject.next(true);
  }
  
  closeMembershipModal(): void {
    this.showMembershipModalSubject.next(false);
  }
  
  registerMember(memberData: any): void {
    // This would typically call an API endpoint
    console.log('Registering member:', memberData);
    // Process registration and handle response
  }
}