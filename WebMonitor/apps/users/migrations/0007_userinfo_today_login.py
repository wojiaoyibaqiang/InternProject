# Generated by Django 2.2.2 on 2021-08-20 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_auto_20210815_1136'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='today_login',
            field=models.BooleanField(default=False, verbose_name='今日是否登录'),
        ),
    ]
