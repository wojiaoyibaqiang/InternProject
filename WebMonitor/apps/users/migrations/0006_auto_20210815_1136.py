# Generated by Django 2.2.2 on 2021-08-15 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_auto_20210812_1522'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='person_type',
            field=models.CharField(choices=[('admin', '机场管理员'), ('passenger', '旅客'), ('airport', '机场工作人员'), ('flight', '机组人员')], default='admin', max_length=10, verbose_name='人员类型'),
        ),
    ]
