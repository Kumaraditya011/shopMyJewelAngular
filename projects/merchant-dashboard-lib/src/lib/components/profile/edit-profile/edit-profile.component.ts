import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { FileUploadService } from '../../../services/file-upload.service';

@Component({
  selector: 'lib-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  profilePhoto: string = 'assets/images/profile-pic.png'; // Placeholder image
  shopName: string = 'Harchand Jewellers';
  licenseNo: string = 'BIS_01245X45';
  email: string = 'adityasahu@gmail.com';
  phoneNumber: string = '+91 6396825945';
  address: string = 'Shop No. 32, BYX complex, Kapurthala mall road, Punjab - 248001';
  place: string = 'Kapurthala';

  socialMedia = {
    website: 'https://www.harchandjewellers.com',
    facebook: 'https://www.facebook.com/harchandjewellers',
    instagram: 'https://www.instagram.com/harchandjewellers',
    youtube: 'https://www.youtube.com/harchandjewellers'
  };

  description: string = `We are the most famous jewellers in Karnataka.`;
  coverImage: string = '';
  constructor(
    private profileService: ProfileService,
    private fileUploadService: FileUploadService
  ) { }
  ngOnInit() {

  }

  onSave() {
    // include merchant id as well
    const formData = {
      shopName: this.shopName,
      licenseNo: this.licenseNo,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address,
      place: this.place,
      socialMedia: this.socialMedia,
      description: this.description
    };
    console.log('Form Data:', formData);
    this.profileService.updateProfileData(formData).subscribe(res => {
      console.log("save profile res", res);
    }, err => {
      console.log("save profile err", err);
    })
  }

  onCancel() {
    // Logic for canceling form actions
    console.log('Form cancelled');
  }

  onUploadProfilePhoto() {
    // Logic for uploading profile photo
    console.log('Upload profile photo clicked');
  }

  onDeleteProfilePhoto() {
    // Logic for deleting profile photo
    console.log('Delete profile photo clicked');
  }
  onProfilePhotoSelected(event: any) {
    // const file = event.target.files[0]; 
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = (e: any) => {
    //     this.profilePhoto = e.target.result;
    //   };
    //   console.log("this.profilePhoto", this.profilePhoto);
    //   reader.readAsDataURL(file); 
    // }

    console.log(" event.target.files", event.target.files);
    console.log(" event.target.files[0]", event.target.files[0]);
    const file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      let files = [], total_files_uploaded = 0;
      files = event.target.files
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        let res={
          file
        }
        res.file = file
          this.fileUploadService.uploadFileToS3(res,index).subscribe((res:any)=>{
            console.log("res after file upload",res);
          },err=>{
            console.log("err after file upload",err);

          })
      }
    }
  }
  onCoverImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.coverImage = e.target.result; // Preview selected cover image
      };
      console.log("this.coverImage", this.coverImage);
      reader.readAsDataURL(file);
    }
  }

}
