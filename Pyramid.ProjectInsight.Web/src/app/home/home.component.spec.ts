import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './../home/home.component';
import { MaterialModule } from './../material.module';
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms';
import { Component, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeService } from './home.service';
import { TextToSpeechService } from '../shared-services/text-to-speech.service'
import { TextToTypeService } from '../shared-services/text-to-type.service'
import { Constants } from '../common/constants';
import { UserInformation } from '../models/user-information.model';
import { UserSelectionKeys } from '../enums/user-selection-keys';
import { Gender } from '../enums/gender';
import { Occupation } from '../enums/occupation';
import { MaritalStatus } from '../enums/marital-status';
import { MedicalCondition } from '../enums/medical-condition';
import { Habit } from '../enums/habit';
import { SelectionTabs } from '../enums/selection-tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {

  let homeServiceSpy: jasmine.SpyObj<HomeService>;
  let textToSpeechSpy: jasmine.SpyObj<TextToSpeechService>;
  let textToTypeSpy: jasmine.SpyObj<TextToTypeService>;
  let successSpy: jasmine.Spy;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  function setup() {
      homeServiceSpy = jasmine.createSpyObj('HomeService', ['getPredictedInvestmentType']);
      textToSpeechSpy = jasmine.createSpyObj('TextToSpeechService', ['getPredictedInvestmentType']);
      textToTypeSpy = jasmine.createSpyObj('TextToTypeService', ['getPredictedInvestmentType']);
      successSpy = homeServiceSpy.getPredictedInvestmentType.and.returnValue("");
  }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ],
            imports: [
                MaterialModule,
                RouterTestingModule,
                FormsModule,
                BrowserAnimationsModule
          ],
          providers: [
              { provide: HomeService, useValue: homeServiceSpy },
              { provide: TextToSpeechService, useValue: textToSpeechSpy },
              { provide: TextToTypeService,useValue: textToTypeSpy}        

          ]
        }).compileComponents();
    }));

  beforeEach(() => {
     setup();
  });

    it('should create the home component', async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should set title', async(() => {
      const fixture = TestBed.createComponent(HomeComponent);
      const app = fixture.debugElement.nativeElement;
      expect(app).toBeTruthy();
    }));
}); 
